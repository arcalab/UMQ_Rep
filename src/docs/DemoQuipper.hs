----------------------------------------------------------
-- QISKIT DEMO -------------------------------------------
----------------------------------------------------------

-- imports:

import Quipper
import Quipper.Internal

import Quantum.Synthesis.Matrix
import Quantum.Synthesis.Ring
import Quipper.Libraries.Synthesis

import Data.Complex
import Data.Ratio

import Quipper.Libraries.Simulation



----------------------------------------------------------
-- How to write your quantum circuit? --------------------
----------------------------------------------------------
-- There are many ways to implement a quantum circuit
-- * Manual implementation
-- * With circuit's matrix
-- * Simulation

----------------------------------------------------------
-- * Manual implementation

mybell1 :: Bool -> Circ (Qubit, Qubit)
mybell1 b = do 
  q <- qinit b
  x <- hadamard q
  y <- qinit False
  y <- qnot y `controlled` x
  return (x,y)


main1 :: IO ()
main1 = do
  print_simple Preview (mybell1 False)

--------------------------------------------------------------
-- * From a matrix

invsq2 :: Cplx (RootTwo (Ratio Integer))
invsq2 = Cplx (RootTwo 0 (1 % 2)) 0   :: Cplx (RootTwo (Ratio Integer))

mymatrix :: Matrix Four Four (Cplx (RootTwo (Ratio Integer)))
mymatrix = matrix  [[ invsq2, 0, invsq2, 0],
                    [ 0, invsq2, 0, invsq2],
                    [ 0, invsq2, 0, -invsq2],
                    [ invsq2, 0, -invsq2, 0]]

synthesized = exact_synthesis mymatrix

mybell2 :: Bool -> Bool -> Circ (Qubit, Qubit)
mybell2 a b = do
  x <- qinit a 
  y <- qinit b 
  synthesized [x,y]
  return (x,y)

main2 :: IO ()
main2 = do
  print_simple Preview (mybell2 False False)
  
----------------------------------------------------------------
-- * Simulate function
simulate :: Circ (Qubit,Qubit) -> IO ()
simulate circuit = print (sim_generic (1.0::Float) circuit)

main3 :: IO ()
main3 = do
  simulate (mybell1 False)

main4 :: IO ()
main4 = do
  simulate (mybell2 False False)

-- ----------------------------------------------------------------------
-- * Main

main = do 
  putStrLn "\n \n choose an option:"
  putStrLn " 1 - PDF manual implementation of circuit\n"
  putStrLn " 2 - PDF matrix implementation of circuit\n"
  putStrLn " 3 - simulation of first circuit\n"
  putStrLn " 4 - simulation of the second circuit\n"
  line <- getLine
  case line of
    "1" -> do main1
              main
    "2" -> do main2
              main
    "3" -> do main3
              main
    "4" -> do main4
              main
    _ -> do main
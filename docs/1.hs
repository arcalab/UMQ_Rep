import Quipper

import Quantum.Synthesis.Matrix
import Quantum.Synthesis.Ring
import QuipperLib.Synthesis


-- ----------------------------------------------------------------------
-- * Manual implementation

increment :: (Qubit, Qubit) -> Circ (Qubit, Qubit)
increment (a1, a0) = do
  qnot a0
  qnot a1 `controlled` (a0 .==. 0)
  return (a1, a0)

myoracle :: Qubit -> Qubit -> Qubit -> Circ Qubit
myoracle a b c = do
  comment "BEGIN myoracle"
  a1 <- qinit 0
  a0 <- qinit 0
  label (a0, a1) "a"
  label (a, b, c) ("a", "b", "c")
  increment (a1, a0) `controlled` (a .==. 0)
  increment (a1, a0) `controlled` (b .==. 0)
  increment (a1, a0) `controlled` (a .==. 1)
  increment (a1, a0) `controlled` (c .==. 0)
  qnot a0 `controlled` (a1 .==. 0)
  comment "END myoracle"
  return a0

r_circuit :: Qubit -> Qubit -> Qubit -> Circ ()
r_circuit a b c = do
  with_computed (myoracle a b c) $ \conflicts -> do
    gate_Z conflicts
    return ()

main1 :: IO ()
main1 = do
  print_simple Preview r_circuit
  
-- ----------------------------------------------------------------
-- * Using "build_circuit"

type Int2 = (Bool, Bool)

build_circuit
increment2 :: Int2 -> Int2
increment2 (a1, a0) =
 if a0 then (not a1, False) else (a1, True)

build_circuit
zero :: Int2
zero = (False, False)

build_circuit
increment_if :: Bool -> Int2 -> Int2
increment_if x y = if x then increment2 y else y

build_circuit
myfold :: (a -> b -> b) -> b -> [a] -> b
myfold cons nil [] = nil
myfold cons nil (x:xs) = cons x (myfold cons nil xs)

build_circuit
myoracle2 :: Bool -> Bool -> Bool -> Bool
myoracle2 a b c = a0 == a1
 where
   xs = [a == False, b == False, a == True, c == False]
   (a1, a0) = myfold increment_if zero xs

myoracle_unpack :: Qubit -> Qubit -> Qubit -> Circ Qubit
myoracle_unpack a b c = do
 label (a,b,c) ("a", "b", "c")
 r <- unpack template_myoracle2 a b c
 label r "result"
 return r

r_circuit2 :: Qubit -> Qubit -> Qubit -> Circ ()
r_circuit2 a b c = do
   with_computed (myoracle_unpack a b c) $ \conflicts -> do
   gate_Z conflicts
   return ()

main2 :: IO ()
main2 = do
 print_simple Preview r_circuit2

-- ----------------------------------------------------------------------
-- * From a matrix

mymatrix :: Matrix Eight Eight Integer
mymatrix = matrix_of_function f
  where
    f i j
      | i /= j = 0
      | cc `mod` 4 == 0 = -1
      | cc `mod` 4 == 1 = 1
      | cc `mod` 4 == 2 = 1
      | otherwise       = -1
      where
        s = i
        a = ((i `div` 4) `mod` 2) /= 0
        b = ((i `div` 2) `mod` 2) /= 0
        c = ((i `div` 1) `mod` 2) /= 0
        xs = [a == False, b == False, a == True, c == False]
        cc = length [ x | x <- xs, x == False ]

synthesized = exact_synthesis mymatrix

r_circuit3 :: Qubit -> Qubit -> Qubit -> Circ ()
r_circuit3 a b c = do
  synthesized [a,b,c]
  return ()

main3 :: IO ()
main3 = do
  print_simple Preview r_circuit3

-------------------------------------------------------------------------

synthesized_conditional :: Matrix Eight Eight Integer  
synthesized_conditional = matrix_of_function f
   where
    f i j
      | i /= j = 0
      | i == 0 = 1
      | otherwise       = -1
        

synthesized_1 = exact_synthesis synthesized_conditional
	   
r_circuit4 :: Qubit -> Qubit -> Qubit -> Qubit -> Qubit -> Qubit -> Circ ()
r_circuit4 a b c d e f = do
  synthesized_1 [a,b,c, d, e, f]
  return () 

main4 :: IO ()
main4 = do
  print_simple Preview r_circuit4  
  print synthesized_conditional 

------------------------------------------

--conditioned_thing :: Matrix n n Integer
--conditioned_thing = matrix 10 10 
  
  
-- ----------------------------------------------------------------------
-- * Main
main = main4

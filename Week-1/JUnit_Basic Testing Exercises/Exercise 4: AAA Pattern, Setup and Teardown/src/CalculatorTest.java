package com.cts;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private int num1;
    private int num2;

    @Before
    public void setUp(){
        num1 = 10;
        num2 = 20;
        System.out.println("SetUp completed");
    }

    @Test
    public void testAddition(){
        int expected = 30;
        int result = num1 + num2;
        assertEquals(expected,result);
    }

    @After
    public void tearDown(){
        System.out.println("Teardown completed");
    }
}

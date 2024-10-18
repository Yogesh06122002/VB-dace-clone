import React from 'react'
import { PiTruckThin } from "react-icons/pi";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#EEEAE6]'>
      <div className='lg:flex lg:px-52 lg:pt-10 pt-8 px-10  grid grid-cols-2 lg:gap-16 gap-x-12 gap-y-10'>
        <div className="lg:flex lg:gap-6  grid grid-flow-row lg:items-center ">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAMAAACo/g5YAAAAP1BMVEVMaXEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLlKh4TAAAAFHRSTlMA0DBw8BAggMBAUOCQoLBg78jM2ChoySwAAAKJSURBVGiB7ZjblqQgDEVREERFq3v4/2+dxU2BgEoV1swD56nbOrpjCBhATU1NTU3/lTb2nrah4C06+a66+5jtbYiUGDwtJwbuvS+WeSaUprAeXD8XNbedenyxIvehsvuUu/RNlGgxBVy8o0ZplC9Q5jGhlQPrZ5SMRriKPkCRCzB/QiEwX+OoMCBpn1BGcBEhtKgBi3NWnaI/i+vjlF7lbKpK4dHAd/aRJMxZZYqeqTBntSnqYwVzVoEi9kZrtfWFVc5oXcoxO4bZzskxqo2qFJNAjhAlYSNVl7LPyShnlSlDl8xZZcpeX2HOalP2OTlJrwerTtnn5GqXgmcoLmcDOT7a9SmpnFVfYazCnD1FUfW1LwXPUdScVL+SChSa35Kq4RJ2ZOp/K30xWxyN0iiN0ij/hkI55xRczVIS9ksKXWazgos0KKKk7VcU/9xsgdvRmJKx+xQY7BCeM6bODn1K1u5TNvCIzrw85liQDManZO0+hcQHZKrblcJYB/0P3Fx7FJa1+xQpu2Az/SODF9ygw+y4yaV9thQM2gI7hF7YN05QRd6uRl13zVB690nFKFQyh7THU2BHs/+TSWu/xrn4tbH1xI3ZkkjZ6/X6A+0ytgtYN0bc7j1XHctqr8BC9Oyb7YoO++WJtut99ZGK7tr42WFYaJdX9vS7jFfBpe23KKrEdM+uH8ASnT2w892Oz+y71A5U/T11ctaHA6pocqNYbHdaowRhuMp/YHfiMjiW1yV6koGUPVuRUXTEhbeRq9j0uDv7dGl30tsbOWNOOTbr7WmaoR1+S1LqwzUFLNqR+rnIfoQ3+kvRZWiF9kOTu7G7M5KIl9kP0YkxNt0OrNDe1NTU1PR9IYT+AprEfnzpZ7jeAAAAAElFTkSuQmCC" alt="" className='h-12 w-12  ' />
        <p className='text-gray-500'>Quick Shipping</p>
        </div>
        <div className="lg:flex gap-6 items-center">
      
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAMAAACo/g5YAAAAM1BMVEVMaXEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKrlasZAAAAEHRSTlMAMCDQEPCggEDAYLBQkOBwOQobEAAAAjNJREFUaIHtmdlyhCAQRVFBcEHv/39tCpylpZExmXYqqXBeUlHkKFs3jKpUKpVKpfL70E6EtvRh8wAhFqtZ7Ru6l3IEuoYJIvFDBhEMAJNtNgtgyt75AWt44cxj2gA9u/pjHICZPzwCC7v4Bj0w8ad7YGUX36AFDH96ABy7+A4A+NPVUqBapCy9leTIIg6TfM7ymRb75/NFj5OJ8dez+CdnsebZ1X3ikbI03Vb/sLnMPjYKWZpQ+bKGT9BbjjXKW/QCGl6dSSJ90eKPM6Xdq6oJMPS9dAcYkusVLYU1wNLyLm2hmAV5YcvEc5Rx9zFFS3OcjdOhqgGwKbLQzytaTjIDHSu50sRRwmKTBow4mrYKWUZ2UdFMT8iSKU5r/gWWdIwdbHbetKTzJbcL+ZBlZDOWRIAzlnQd86ykUg2rmrKesJzBsZozC5GEJduQ260/bGmttTO9dYFF+9gXjzOEayzTrcvvgeUSS5g4g/XPaXKJZdqqnx9VXmIZgNgj3e3vtZblUsstxxgf4euFZcoGvzxPi4snbuFgzSeWNmtZj1cNBhnJ95O7Lh3JNltfy7K4Y+jct1t8uOdhd0tIonPV9Th9qrRbYfRjfBFLyJqzB2GhNBbP9oecdr8mD7QDosXGLUc+luuOhYo87pUFfDdDNHRrVeCMJd2Z7XCseTK8brH56DT5O+wtfiD/uFxmK2FJb/05i2H7wY1O1FJAyqJKvzt0EuNrg+0Gn8hJKpVKpVIpoJT6AuMTYG1W4BxQAAAAAElFTkSuQmCC" alt="" className='h-12 w-12' />
        <p className='text-gray-500 '>Secured  <br  /> Payments</p>
        </div>
        <div className="lg:flex gap-6 items-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAMAAACo/g5YAAAAaVBMVEVMaXEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKvoudBAAAAInRSTlMAEGDv8DBwwECAoCDQ4FCwkFcf/tyc9t9sjK/nh/Lz+1hkYp5gYgAAArZJREFUaIHtWGuXnCAMFasCgo9O2+272+b//8gecFVm4irJwDfuhz1z1sc1CUluUhUUFBQU5EPbZneu6QEAeoMupETbgEeT056VBKAR6GIyWO8u6f7qbCTjm69qABjQ1VSYAKBz73LGZGNpABr/w9EpdDkNWheUjSXXYXapUvtfNp/HhDvGywEGAImup0G9OUwBwJyJZdhC3m2uSw61J4kLUKYSI3cD8gU/MCVj8J0pb7Vrz5vUcKasdbheC01OU6o5V30Zw5YiMwVfDGFHAQCLbkmAPmwouYLvwr1HIlPw3ccHdStP8L2ksLuayBJ85UiaoGflCH79KL8yBF9MSOONyYM/Doik0oAwPKNojZd3YO9f0SAS9yHsptYt73tsvd8QhceIno+BWAwZcGZ8/yofwBbO7RKRODVsLO9ELOJexgZVsbrnQkKQ9QODxZM0hHgahi1eRJKmLc1gkVSSuqFHv4Or0n77+SHEq3vg5YZuO4O5/LDbC8pJZ/3pM4/oL338CzHAYZU4gYDrCegLIqBWmY7XPpQlTbSWqee9mIp9ULD7bUcQHYq9MKgJo5NmtwpLsEVzx6wx4mxumKLEVnePv6r2new8zQL0MSyfUaYs2R/tBB1h9ztJSVAYOiaGh7ZIQjjjzuOPe3Xh6utvirpgrSWEpa4ZWLmvqMVPbisdCqgdueNIq5HKYjg7yYlc/SR5YaT8JptWl/zC5TwyHz+hbGEJpdMDc0RCFuN+JD7z2QGLpB/L+ZJmF2N/PMk/dEsE7BVNAD9VnDr4PXilEFtovKpG/43BMlnYuAbbs6pFtfoBYIrhmfmL8mXQB7D15WcOz2xMxnXkllqdfKqZntuYCB2M9lL2+gi+uDy3whZ6QPl3hAk9SUQ7XxMxEh/DjHqS6NUbbNqNv1FHQLcVFBQUFJBRVdV/rqp0o/4R9fMAAAAASUVORK5CYII=" alt="" className='h-12 w-12' />
        <p className='text-gray-500'>Quality <br className='hidden lg:block' /> Guaranteed</p>
        </div>
        <div className="lg:flex gap-6 items-center">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAOVBMVEVMaXEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJ/GtXGAAAAEnRSTlMAMGBw8KAQgEDA4NCwUJAg2Li3jAYqAAACL0lEQVRoge2Z2bKkIAyGZQe3Psf3f9gpELtpUUwiTs1U8V11YcgPgQ5b12g0Go3/A8aNc/2yLEvvnOGseqM1H+WyQ45cZ4Z07LgX2BhtJQnef5xKF0h61fOsAh67SUglkmZboTal/m5vdAyUnA/Gmc1RZ7w1NpO8CEkMpZyyL2DmC4lEZs4+wIihMhex0OZGyPQQunEwFntY6MxAUFk1YO1b+0xQcb6eyopPUN7aHX87J9Qyp58zBKpNKxxdJ7SqOA/3MIlvl1eRmNTsB33ISi9AVvIBlq+s+IKX774o23zQKOtd26Dz2FCmYxenPXBGho6QFlcG74rBz6wNBe6Kz0ToUV95+WyXlR4wUUeki6MCWVsU0O4QDgy1XBaZFYKB1Wb0Ye9iHK5npsDmuW/45f9YC2N+/IItiNsPLfy24MeYgoPhvWVDZ0ewA57sP0nza0ocnIXcJDaIRRHnwNv4Lact2BSBOGgiTeTUpkgTaSKnDprIvykirLWiYFME4uCvrIw2sSHv6jdOb3XU2+TGrv7SAbMr5Ks/Zv2u6JfuAATqSEeEEY+bGMKFDPlwA8SRzuY4FHmDCwd76UNA4y6vSLDheQ0hH9dgrpgUscyfFCi3c85L3b4c/iI9jMVUbWNWdNX+H9/PD6Zjc7zKlxVzSbhsCvj29+/Xh7lmTvQi669khZNz3UxyIOKqvgdtIus7zXrJrqorHAz8I0xfIk8l9eSBa3g4qTcajUajAl3X/QErokDtEbnNGgAAAABJRU5ErkJggg==" alt=""  className='h-12 w-12'/>
        <p className='text-gray-500'>
           Customer Support <br />
           b/n 10 am to 6 pm</p>
        </div>

      </div>

      <div className="lg:flex gap-10 lg:mt-20 mt-16 lg:px-20 px-4 justify-between pb-20">
        <div className='lg:w-[40%]'>
          <h2 className='text-xl lg:text-2xl mb-4'>VB DACE | Redefine your Cooking Experience</h2>
          <p className='text-sm mb-4'>Elevate your Cooking Experience with our heirloom collection of non-toxic, sustainable Kitchenware. Combining timeless craftsmanship with cutting-edge technology, we empower you with elegant, precise, and health-focused solutions for all your culinary needs.</p>
          <button>
          <img src="data:image/png;base64,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" alt="" className='h-10 w-auto'/></button>
        </div>
        <div className="flex lg:hidden gap-x-16">
        <div className=''>
          <p className='font-semibold mb-2'>Policies</p>
          <p className='text-sm'>Returns Policy <br />
            Terms of Use <br />
            Privacy Policy <br />
            Cookie Policy <br />
            Shipping & delivery</p>
        </div>
        <div className=''>
          <p className='font-semibold mb-2'>Company</p>
          <p className='text-sm'>About VB Dace <br />
          Contact Us</p>
        </div>
        </div>
        <div className='hidden lg:block'>
          <p className='font-semibold mb-2'>Policies</p>
          <p className='text-sm'>Returns Policy <br />
            Terms of Use <br />
            Privacy Policy <br />
            Cookie Policy <br />
            Shipping & delivery</p>
        </div>
        <div className='hidden lg:block'>
          <p className='font-semibold mb-2'>Company</p>
          <p className='text-sm'>About VB Dace <br />
          Contact Us</p>
        </div>
        <div>
          <p className='font-semibold mb-2 hidden lg:block'>My Account</p>
          <p className='text-sm hidden lg:block'>Log In or Create an Account</p>
          <button className='mt-2 lg:flex hidden  justify-between px-2 hover:bg-[#23272B] hover:text-white p-1 items-center w-[100%] border-[1px] border-black'>
            <p>Log In</p>
            <BiRightArrowAlt className='text-xl' />

          </button>
          <button className='mt-2 hidden lg:flex justify-between px-2 p-1 bg-[#23272B] text-white items-center w-[100%] border-[1px] border-black'>
            <p>Create an account</p>
            <BiRightArrowAlt className='text-xl' />

          </button>
            <div className="flex gap-4 lg:mt-5 mt-10 ">
                <button className='border-[1px] p-1 border-[#23272B] rounded-full hover:bg-[#23272B] hover:text-white'><FaFacebookF className='text-xl' /></button>
                <button className='border-[1px] p-1 border-[#23272B] rounded-full hover:bg-[#23272B] hover:text-white'><FaInstagram className='text-xl' /></button>
                <button className='border-[1px] p-1 border-[#23272B] rounded-full hover:bg-[#23272B] hover:text-white'><FaYoutube className='text-xl' /></button>

            </div>
        </div>

      </div>
      <div className=' hidden lg:block border-b-[1px] border-gray-300 w-[90%] mx-20  '></div>
      <div className="lg:mt-4 mt-[-30px]  pb-10 lg:pb-14">
        <p className='text-sm px-20'>
        © 2023 VB Dace Appliances Private Limited. <br className='hidden lg:block' />
        All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
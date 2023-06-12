'use client'
import * as React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import axios from 'axios'

interface FormFileds {
  name: string
  email: string
  phone: string
  country: string
  message: string
}

const initialFields: FormFileds = {
  name: '',
  email: '',
  phone: '',
  country: '',
  message: '',
}

export default function Contact() {
  const [formFileds, setFormFileds] = React.useState<FormFileds>(initialFields)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormFileds({
      ...formFileds,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams()
    params.append('name', formFileds.name)
    params.append('email', formFileds.email)
    params.append('phone', formFileds.phone)
    params.append('country', formFileds.country)
    params.append('message', formFileds.message)

    //send request
    axios
      .post('https://www.superunionlogistics.com/api/sendmail', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log(response.data)
        setIsOpen(true)
        setFormFileds(initialFields)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="w-[50%]">
      <form className="space-y-[60px]" onSubmit={handleSubmit}>
        {/* inputs */}
        <div className="flex h-10 w-full">
          <div
            className="
                                flex  w-[40%]
items-center  border-b
border-l border-t
                                border-b-[var(--blue)]

                border-l-[var(--blue)] border-t-[var(--blue)] pl-[21px] text-start text-[#666666]"
          >
            Your name*
          </div>
          <input
            className="w-[60%] border-b border-r border-t
                border-b-[var(--blue)] border-r-[var(--blue)] border-t-[var(--blue)] outline-none 
                "
            name="name"
            value={formFileds.name}
            onChange={handleChange}
          />
        </div>
        <div
          className="flex h-10 w-full
                                                            border-b  border-l
border-r  border-t
border-b-[var(--blue)] border-l-[var(--blue)]
                            border-r-[var(--blue)] border-t-[var(--blue)]

                            "
        >
          <div
            className="flex w-[40%] items-center pl-[21px] text-start                                 text-[#666666]
"
          >
            Your email*
          </div>
          <input
            className="w-[60%] outline-none  "
            onChange={handleChange}
            name="email"
            value={formFileds.email}
            type="email"
          />
        </div>
        <div
          className="flex h-10 w-full
                                                            border-b  border-l
border-r  border-t
border-b-[var(--blue)] border-l-[var(--blue)]
                            border-r-[var(--blue)] border-t-[var(--blue)]



                            "
        >
          <div
            className="flex w-[40%] items-center pl-[21px] text-start
                                                text-[#666666]
                                "
          >
            Your phone number*
          </div>
          <input
            className="w-[60%] outline-none  "
            name="phone"
            value={formFileds.phone}
            onChange={handleChange}
          />
        </div>

        <div
          className="flex h-10 w-full
                                                            border-b  border-l
border-r  border-t
border-b-[var(--blue)] border-l-[var(--blue)]
                            border-r-[var(--blue)] border-t-[var(--blue)]


                            "
        >
          <div
            className="flex w-[40%] items-center pl-[21px] text-start
                                                                text-[#666666]

                                "
          >
            Your country*
          </div>
          <input
            className="w-[60%] outline-none "
            name="country"
            value={formFileds.country}
            onChange={handleChange}
          />
        </div>

        <textarea
          placeholder="Your message here"
          className="max-h-[218px] min-h-[218px] w-full border border-[var(--blue)] pl-[21px] pt-5 text-[14px] outline-none"
          name="message"
          value={formFileds.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="h-[60px] w-full bg-[var(--blue)] text-xl text-white"
        >
          Submit
        </button>
      </form>

      <AlertDialog.Root open={isOpen}>
        <AlertDialog.Trigger />
        <AlertDialog.Portal className="bg-[red]">
          <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-10" />
          <AlertDialog.Content className=" fixed left-[50%] top-[10%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%]  rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
            <div className="text-center text-xl">
              <p>
                Thank you. Your message has been successfully delivered to us.
              </p>
              <button
                className="mt-8 w-[100px] rounded-md bg-[var(--blue)] text-white"
                onClick={() => setIsOpen(false)}
              >
                OK
              </button>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  )
}

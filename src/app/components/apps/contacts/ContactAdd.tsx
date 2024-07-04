'use client'
import React, { useContext, useState } from 'react';
import profilepic from '../../../../../public/images/profile/user-5.jpg';
import { ContactContext } from '@/app/context/Conatactcontext/index';
import { Modal, Button, TextInput, Label, Select, Textarea } from 'flowbite-react'
import { IconX } from '@tabler/icons-react'

const ContactAdd = () => {
  const { addContact } = useContext(ContactContext);
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    image: profilepic,
    company: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    department: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name!]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact(formData);
    handleClose();
  };

  return (
    <>
      <Button className='w-full' color={'primary'} onClick={handleShow}>Add New Contact</Button>
      <Modal show={show} onClose={handleClose} >

        <Modal.Header>
          <div>
            <h5 >
              Add New Contact
            </h5>
            <div onClick={handleClose}>
              <IconX />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p id="alert-dialog-description">
            Let's add a new contact for your application. Fill in all fields and click the submit button.
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div >
                  <TextInput
                    name="firstname"
                    onChange={handleChange}
                    value={formData.firstname}
                    required
                  />
                </div>
                <div >

                  <TextInput
                    name="lastname"
                    onChange={handleChange}
                    value={formData.lastname}
                    required
                  />
                </div>
                <div >
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="Department" value="Select department" />
                    </div>
                    <Select id="Department" name="department" onChange={handleChange} value={formData.department}>
                      <option value="Engineering">Engineering</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <TextInput
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
                <div >
                  <TextInput
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <TextInput
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div >
                  <Textarea id="address" name="address" placeholder="address..." required rows={4} onChange={handleChange}
                    value={formData.address} />
                </div>
                <div >
                  <Textarea id="notes" name="notes" placeholder="note..." required rows={4} onChange={handleChange}
                    value={formData.notes} />
                </div>
                <Modal.Footer>
                  <div >
                    <Button color="primary" type="submit" >
                      Submit
                    </Button>
                    <Button color="error" onClick={handleClose}>
                      Cancel
                    </Button>
                  </div>
                </Modal.Footer>
              </div>
            </form>
          </div>
        </Modal.Body >
      </Modal>
    </>
  );
};
export default ContactAdd;

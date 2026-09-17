# Robert_Charity_Foundation# Robert Charity Foundation Website

## About the Project

The **Robert Charity Foundation** website is a responsive charity and community-support website created to introduce the foundation, communicate its mission, showcase its work, and provide visitors with an easy way to get involved.

The website is designed to provide a warm, welcoming, and professional online presence for the foundation while making it easy for visitors to learn about its cause, contact the organization, volunteer, donate, or explore opportunities to support its work.

---

## Foundation Information

**Organization:** Robert Charity Foundation

**Location:** Muyembe Town Council, Bulambuli District, Uganda

**Phone:**

* 0394713187
* 0792906522

**Email:** [charityfoundationrobert@gmail.com](mailto:charityfoundationrobert@gmail.com)

---

## Website Features

### Home Page

The homepage introduces visitors to the Robert Charity Foundation and provides an overview of:

* The foundation's cause
* Mission and purpose
* Community impact
* Ways visitors can help
* The foundation's founder
* Contact information

The homepage uses clear sections and visual content to help visitors understand the foundation and its work.

### Our Cause

This section explains the issues and communities the foundation focuses on and why support is important.

### Mission

The mission section communicates the foundation's purpose and its commitment to creating opportunities, restoring hope, and making a lasting difference.

### Impact

The impact section highlights the foundation's contribution to communities and the difference that support and community involvement can make.

### Founder

The website includes a dedicated section introducing the founder:

**Robert Kazibwe**

The section provides visitors with information about the founder and his role in the foundation.

### Join Us

Visitors can learn about different ways they can support the foundation, including:

* Volunteering
* Donating
* Sponsoring
* Fundraising
* Partnering with the foundation

### Contact Page

The contact page allows visitors to communicate directly with the Robert Charity Foundation.

Visitors can provide:

* Full name
* Email address
* Phone number
* Subject
* Message

The website sends contact-form submissions through **EmailJS**.

---

## EmailJS Integration

The contact form uses EmailJS to send messages without requiring a traditional server-side email script.

### EmailJS Configuration

The website uses:

**Service ID**
`service_vtgjxb4`

**Template ID**
`template_m1xet8m`

**Public Key**
`xNsCxYsqo5CDj7Av5`

The contact form sends the following variables:

* `name`
* `email`
* `number`
* `subject`
* `message`

The foundation receives contact-form messages at:

`charityfoundationrobert@gmail.com`

The EmailJS template uses:

`{{email}}`

as the **Reply To** address so that the foundation can reply directly to the person who submitted the form.

---

## Contact Information

The official contact information used throughout the website is:

**Robert Charity Foundation**

**Location:**
Muyembe Town Council, Bulambuli District, Uganda

**Phone:**
0394713187 / 0792906522

**Email:**
[charityfoundationrobert@gmail.com](mailto:charityfoundationrobert@gmail.com)

---

## Technologies Used

The website is built using standard web technologies:

* **HTML5** — Website structure
* **CSS3** — Styling and responsive design
* **JavaScript** — Interactivity and functionality
* **Bootstrap** — Responsive layout and components
* **jQuery** — Front-end functionality
* **Font Awesome / Themify Icons** — Icons
* **EmailJS** — Contact-form email delivery

---

## Project Structure

A simplified structure of the project is:

```text
Robert-Charity-Foundation/
│
├── index.html
├── contact.html
│
├── css/
│   ├── bootstrap.min.css
│   ├── style.css
│   └── ...
│
├── js/
│   ├── main.js
│   ├── contact.js
│   └── ...
│
├── img/
│   ├── logo.png
│   ├── footer_logo.png
│   ├── profile.png
│   └── ...
│
└── README.md
```

The exact file structure may contain additional assets and libraries.

---

## Running the Website Locally

The website can be run locally for development and testing.

A local development server such as **VS Code Live Server** can be used.

Example:

```text
http://127.0.0.1:5500/
```

The EmailJS contact form can also be tested while the website is running locally.

---

## Contact Form Testing

To test the contact form:

1. Start the website using a local development server.
2. Open the Contact page.
3. Enter a name.
4. Enter an email address.
5. Optionally enter a phone number.
6. Enter a subject.
7. Enter a message.
8. Click **Send Message**.
9. Check the foundation email inbox.
10. If necessary, check the Spam/Junk folder.
11. EmailJS Email History can be used to verify whether the request was successfully processed.

---

## Design

The website follows a warm, welcoming charity-oriented visual style.

The design focuses on:

* Community
* Hope
* Human connection
* Accessibility
* Simplicity
* Professional presentation

The website is responsive and designed to work across desktop, tablet, and mobile screen sizes.

---

## Contact Form Security

The website does not store visitor messages directly in a local database. Contact-form submissions are processed through EmailJS.

The EmailJS **Public Key** is intended for use in client-side applications. Private account credentials should never be placed inside the website's source code.

---

## Copyright

Copyright ©2026 Robert Charity Foundation. All rights reserved.

---

## Project Purpose

The purpose of this website is to provide the Robert Charity Foundation with a clear digital presence where community members, supporters, volunteers, donors, and potential partners can learn about the organization and connect with the foundation.

The website aims to make it easier for people to discover the foundation's work and find ways to contribute to positive change in their communities.

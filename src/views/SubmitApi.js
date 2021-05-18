import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ApiSubmit = (props) => {
    // eslint-disable-next-line
    const [formdata, setFormdata] = useState({
      apiname: "",
      email: "",
      url: "",
      giturl: "",
      date: "",
      selectCategories: [],
      description: "",
      file: ""
    });


    const handleSubmit = (e) =>{
      console.log(e);

      e.preventDefault()
    }

    const handleChange = (e) =>{
      const {name, value} = e.target;


    }


  return (
    <Form onSubmit={handleSubmit} action="" method= "POST">
        <Label>Use the form below to submit your API to our directory</Label>
        <FormGroup>
        <Label for="apiName">Name</Label>
        <Input
          onChange={handleChange}
          value={formdata.apiname}
          type="text"
          name="apiname"
          id="apiName"
          placeholder="Enter a name for your API"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">API email</Label>
        <Input
          onChange={handleChange}
          value={formdata.email}
          type="email"
          name="email"
          id="apiEmail"
          placeholder="Enter an official email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUrl">API url</Label>
        <Input
          onChange={handleChange}
          value={formdata.url}
          type="url"
          name="url"
          id="apiUrl"
          placeholder="Enter a web address"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUrl">GitHub</Label>
        <Input
          onChange={handleChange}
          value={formdata.giturl}
          type="url"
          name="giturl"
          id="gitUrl"
          placeholder="Enter github for your API"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Launch Date</Label>
        <Input
          onChange={handleChange}
          value={formdata.date}
          type="date"
          name="date"
          id="apiDate"
          placeholder="Select a launch date for your API"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Categories</Label>
        <Input
          onChange={handleChange}
          value={formdata.selectCategories}
          type="select"
          name="selectCategories"
          id="selectCategories"
          multiple
          required
        >
          <option>Advertising</option>
          <option>Business</option>
          <option>Business Software</option>
          <option>Commerce</option>
          <option>Communication</option>
          <option>Data</option>
          <option>Database</option>
          <option>Devices</option>
          <option>eCommerce</option>
          <option>Education</option>
          <option>Email</option>
          <option>Energy</option>
          <option>Entertainment</option>
          <option>Events</option>
          <option>Finance</option>
          <option>Financial</option>
          <option>Food</option>
          <option>Gaming</option>
          <option>Health, Fitness</option>
          <option>Location</option>
          <option>Logistics</option>
          <option>Machine Learning</option>
          <option>Mapping</option>
          <option>Media</option>
          <option>Medical</option>
          <option>Monitoring</option>
          <option>Music</option>
          <option>News, Media</option>
          <option>Sports</option>
          <option>Travel</option>
          <option>Transportation</option>
          <option>Video, Images</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="apiText">Description</Label>
        <Input onChange={handleChange} value={formdata.description} type="textarea" name="description" id="apiDescription" placeholder="Add a description" required />
      </FormGroup>
      <FormGroup>
        <Label for="apiFile">Image File</Label>
        <Input onChange={handleChange} value={formdata.file} type="file" name="file" id="apiFile" required />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <input className="submitmargin" type="submit" value="Submit"/>

    </Form>
  );
}

export default ApiSubmit;
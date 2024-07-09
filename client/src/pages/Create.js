import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialFormState = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialFormState);
  const [customSkill, setCustomSkill] = useState("");
  const [skillSet, setSkillSet] = useState([
    { name: "Javascript" },
    { name: "Java" },
    { name: "Python" },
    { name: "Django" },
    { name: "Rust" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate('/employee/feed');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    const { value } = e.target;
    if (form.techs.includes(value)) {
      setForm({ ...form, techs: form.techs.filter(tech => tech !== value) });
    } else {
      setForm({ ...form, techs: [...form.techs, value] });
    }
  };

  const handleCustomSkillChange = (e) => {
    setCustomSkill(e.target.value);
  };

  const addCustomSkill = () => {
    if (customSkill.trim() !== "") {
      setSkillSet([...skillSet, { name: customSkill }]);
      setCustomSkill("");
    }
  };

  return (
    <Paper sx={{ padding: "2%", backgroundColor: "#FAF9ED" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="text"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Job-profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: parseInt(e.target.value, 10) })}
            label="Years of Experience"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="text"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: "1% auto" }}>
            <Typography variant="h6">Please mention required skills</Typography>
            <ul>
              {skillSet.map((skill, index) => (
                <li key={index}>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={skill.name}
                      value={skill.name}
                      onChange={handleChange}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{skill.name}</label>
                  </div>
                </li>
              ))}
            </ul>
            <TextField
              type="text"
              sx={{ width: "50%", margin: "2% auto" }}
              label="Add Custom Skill"
              variant="outlined"
              value={customSkill}
              onChange={handleCustomSkillChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCustomSkill();
                }
              }}
            />
            <Button
              sx={{ width: "50%", margin: "2% auto" }}
              variant="contained"
              onClick={addCustomSkill}
            >
              Add Custom Skill
            </Button>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;

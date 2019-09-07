/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from "react";

import preloader from "spectacle/lib/utils/preloader";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
  Image,
  Code,
  Appear,
  Link,
  CodePane,
  Table,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  TableBody,
  S
} from "spectacle";

import { Keyword } from "./components/keyword";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import RawHtml from "./assets/raw-html";

const images = {
  twitterQRCode: require("./assets/twitter-qr-code.png")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Going Fast
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            The Art of Delivering Quality Software Quickly
          </Heading>
          <Layout>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                Josh Carroll
              </Text>
            </Fill>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                @jwcarroll
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps>
            Software Development is Too <Keyword>Slow!</Keyword>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps>
            Why?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            We are too focused on
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              Small <Keyword>local</Keyword> optimizations
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              Instead of
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              The <Keyword>entire</Keyword> pipeline
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            DevOps is a good thing
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              But What About <Keyword>everything</Keyword> else
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              Management, Culture... <Keyword>People</Keyword>
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              Maybe we also need <Keyword>OrgOps</Keyword>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Value Stream
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Concept to cash
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              Every step between a <Keyword>request</Keyword>
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              And when it goes to <Keyword>production</Keyword>
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" textColor="tertiary" fit bold>
              The goal is <Keyword>reducing</Keyword> waste
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Thinking Differently
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Why do we release
          </Heading>
          <Heading size={1} fit caps>
            in <Keyword>batches?</Keyword>
          </Heading>
          <Appear>
            <List>
              <ListItem>Inefficiencies</ListItem>
              <ListItem>Difficult State Transitions</ListItem>
              <ListItem>Pain Avoidance</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} textColor="tertiary" fit caps>
              How can we <Keyword>reduce</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="tertiary" fit caps>
              or <Keyword>Eliminate</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="tertiary" fit bold>
              time needed to get to <Keyword>production</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="tertiary" fit bold>
              without <Keyword>breaking</Keyword> production
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Solution?
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="tertiary">
              Bring the pain <Keyword>forward</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="tertiary">
              If something is <Keyword>hard</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="tertiary">
              Do it <Keyword>more often</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Imagine That
          </Heading>
          <Text size={1} caps textColor="tertiary">
            you could only deploy <Keyword>one line</Keyword> of code at a
            time, couldn't branch, and had no QA...
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps>
            How would you <Keyword>change</Keyword> your process?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Software Process
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            All Software Involves
          </Heading>
          <Layout style={{ justifyContent: "space-around" }}>
            <Appear>
              <List ordered>
                <ListItem>Design</ListItem>
                <ListItem>Planning</ListItem>
                <ListItem>Coding</ListItem>
              </List>
            </Appear>
            <Appear>
              <List ordered start={4}>
                <ListItem>Testing</ListItem>
                <ListItem>Integration</ListItem>
                <ListItem>Deployment</ListItem>
                <ListItem>User Testing</ListItem>
              </List>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            All Software Involves
          </Heading>
          <Layout style={{ justifyContent: "space-around" }}>
              <List ordered>
                <ListItem>Design</ListItem>
                <ListItem>Planning</ListItem>
                <ListItem>Coding</ListItem>
              </List>
              <List ordered start={4}>
                <ListItem>Testing</ListItem>
                <ListItem style={{textDecoration:"line-through"}}>Integration</ListItem>
                <ListItem>Deployment</ListItem>
                <ListItem style={{textDecoration:"line-through"}}>User Testing</ListItem>
              </List>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            <Keyword>Ignoring</Keyword> them leads to
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Poor Quality
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Rework</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Waste
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            <Keyword>Memorializing</Keyword> them leads to
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Long Delays
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Knowledge <Keyword>Loss</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Batching
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solution
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Small</Keyword> rapid iteration
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Short</Keyword> feedback loops
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Automation
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Quality</Keyword> Throughout
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Design Problems
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Architecture Astronauts
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Long or Large <Keyword>Batches</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Little outside <Keyword>feedback</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Big</Keyword> bang reveal
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              No <S type="strikethrough">plan</S> feature survives contact with the {" "}
              <S type="strikethrough">enemy</S> user.
            </Quote>
            <Cite>Napoleon</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Organizational <Keyword>Boundaries</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Large <Keyword>Batch</Keyword> Releases
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Rapid <Keyword>prototyping</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Minimum</Keyword> Viable Feature
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Alpha / Beta <Keyword>Testing</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Planning Problems
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Over Engineering
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Overly <Keyword>complex</Keyword> solutions
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Reinventing</Keyword> the wheel
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Analysis Paralysis
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Psychological, Infrastructure, Institutional
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Engineers love <Keyword>challenges</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Rigid.</Keyword> Difficult to change/update
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Culture of <Keyword>blame</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              If your company culture always looks to assign blame first when
              something goes wrong, find a new job.
            </Quote>
            <Cite>Josh Carroll</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Planning should <Keyword>be on-demand</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Long Term <Keyword>Themes</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              A Few <Keyword>Quarterly</Keyword> Milestones
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Stack <Keyword>Ranked</Keyword> Backlog
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Bias towards <Keyword>action</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Text size={1} caps textColor="primary">
              Experimentation and action <Keyword>create</Keyword> knowledge
            </Text>
          </Appear>
          <Appear>
            <Text size={1} caps textColor="primary">
              Running software brings <Keyword>focus</Keyword>
            </Text>
          </Appear>
          <Appear>
            <Text size={1} caps textColor="primary">
              and <Keyword>clarity</Keyword> out of <Keyword>necessity</Keyword>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Coding Problems
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Going Dark
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Long</Keyword> Lived Feature Branches
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Infrequent</Keyword> Check-Ins
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Always <Keyword>"Almost"</Keyword> Done
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Features Are Too <Keyword>Big</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Merging partial work is <Keyword>difficult</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Ego</Keyword> Driven Development
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Tasks {"<="} 1 Day
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Top</Keyword> Task Always up for grabs
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Pair Programming / Code Review
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Feature Toggles
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Branch by Abstraction
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Developer Silos
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              "I don't know that part of the app."
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              "That's Sally's area."
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Learning new things is <Keyword>hard</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Nobody</Keyword> likes to suck
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              ...or be <Keyword>slow</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Devs Should Own <Keyword>Outcomes</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Remove</Keyword> organizational boundaries
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              No Backlog Cherry Picking
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              <Keyword>Automated</Keyword> Code Style / Linting
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Poor Quality
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Developers <Keyword>consistently</Keyword> write <Keyword>sloppy</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              or <Keyword>unmaintainable</Keyword> code
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              No quality <Keyword>standards</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              No <Keyword>coaching</Keyword> or <Keyword>mentoring</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Unrealistic</Keyword> Deadlines / Pressure
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            What if it continues?
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Fire Them!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Harsh?
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Keeping a <Keyword>bad</Keyword> team member
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Hurts the <Keyword>rest</Keyword> of your team
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              It <Keyword>Reduces</Keyword> Productivity
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              And <Keyword>Diminishes</Keyword> Morale
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            What if it's <Keyword>systemic?</Keyword>
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Fire Yourself!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Harsh?
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              If you have a <Keyword>toxic</Keyword> culture
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              It's either <Keyword>your</Keyword> fault
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              or you should <Keyword>quit</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Not Invented Here
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Creating <Keyword>custom</Keyword> solutions to
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              an <Keyword>already</Keyword> solved problem
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              when an open source or
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              commercial <Keyword>alternative</Keyword> exists
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Pride or <Keyword>Ignorance</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Company <Keyword>Policy</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Boss is a <Keyword>tightwad</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={1} fit caps>
              Foster Culture of <Keyword>research</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Educate devs to <Keyword>cost</Keyword> of time
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps>
              Appeal to tightwads with <Keyword>money</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Cult of Reuse
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>All</Keyword> projects reference
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              .Common, .Core, .Lib
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Or... <Keyword>Shared API</Keyword> Project
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Unnecessary <Keyword>Abstractions</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Can't change <Keyword>X</Keyword> it will break <Keyword>Y</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Separate</Keyword> Architecture Teams
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Believe it will <Keyword>save</Keyword> time
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Build it once mentality
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Lies!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            <Keyword>Myth</Keyword> of code reuse
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Creates <Keyword>Brittle</Keyword> Architecture
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Monolith</Keyword>, Ball of mud
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Increases</Keyword> cognitive load
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Increases</Keyword> development time
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Rewrite Solutions Often
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Keeps Solutions <Keyword>Small</Keyword> And <Keyword>Isolated</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Creates Deep Domain <Keyword>Knowledge</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Repetition</Keyword> makes you efficient
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Frees you from tech <Keyword>lock-in</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Become a library author
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Treat common libs/apis like <Keyword>3rd party</Keyword> dependencies
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Strict packaging with <Keyword>semver</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Backwards <Keyword>compatibility</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Testing Problems
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Test, Reject, Repeat Cycle
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              All testing is <Keyword>manual</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Separate</Keyword> QA Cycles
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              QA's job is to find bugs
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Reasons
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Separate</Keyword> QA Team
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Developers don't <Keyword>own</Keyword> quality
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              No <Keyword>automated</Keyword> testing
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Build quality in
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              You cannot <Keyword>inspect</Keyword> quality
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              into a product
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            QA == verification
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              It's <Keyword>not</Keyword> QA's job
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              To <Keyword>find</Keyword> bugs in your code
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              It's called quality <Keyword>assurance</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Everyone Own Quality
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Devs Should <Keyword>Write</Keyword> Tests / Specs
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Devs should <Keyword>test</Keyword> their own code
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Automated testing. Not too much
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Automate</Keyword> quality checks
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Deployment Problems
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Scheduled Deployments
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Arbitrary <Keyword>time boundary</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Deployments require a <Keyword>team</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              You have <Keyword>botched</Keyword> deployments
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            1999 Called
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              They want their
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              deployment process <Keyword>back</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Solutions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Continuous Delivery / Deployment
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Every</Keyword> check in should result
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              in a deployment to either <Keyword>production</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              or a <Keyword>staging</Keyword> environment
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              including <Keyword>database</Keyword> changes
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            You have <Keyword>zero</Keyword> excuses
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Jenkins, Circle CI, TeamCity, etc...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              AWS, Azure, Firebase
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Bash, Powershell
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Conclusion
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps>
            Know Your <Keyword>Real</Keyword> Process
          </Heading>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Eliminate <Keyword>Waste</Keyword>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              <Keyword>Automate</Keyword> Everything Else
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} fit caps textColor="primary">
              Achieve Zen <Keyword>Enlightenment</Keyword>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            Thank You!
          </Heading>
          <Heading size={1} fit caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            https://github.com/jwcarroll/going-fast
          </Heading>
          <Image src={images.twitterQRCode} margin="20px auto 20px" height="300px" />
          <Layout>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                Josh Carroll
              </Text>
            </Fill>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                @jwcarroll
              </Text>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}

# Reactor Core Crisis Challenge

## Background
Imagine a colossal computational node, equipped with 10,000 CPU Cores and 10,000 GB of RAM, running a critical application with just two endpoints. This node is the lifeblood of our digital infrastructure, and its stability is paramount to our operations.

## The Challenge
The application features two endpoints:
- `POST /charge-device`: Used for charging devices, but this process is intensive and takes more than 10 seconds.
- `GET /status`: Allows for system status checks.

Here's the twist: when `charge-device` is in process, the `status` endpoint becomes unresponsive. Given our system has a security protocol that initiates self-destruction if the `status` endpoint does not respond within 4 seconds, we are in dire need of a solution.

## Your Mission
This challenge is based on Node.js using the Express.js library. Your task is to modify the architecture or code to ensure that the `status` endpoint remains operational and responsive, even while the `charge-device` endpoint is processing a charge. Achieving this is crucial to prevent system self-destruction and to ensure the continuity of our critical operations.

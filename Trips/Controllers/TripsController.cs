using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController: Controller
    {
        private ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }
        [HttpGet("[action]")]
        public IActionResult GetAllTrips()
        {
            try {
                var allTrips = _service.GetAllTrips();
                return Ok(allTrips);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("SingleTrip/{tripId}")]
        public IActionResult GetTripById(int tripId)
        {
            var trip = _service.GetTripById(tripId);
            return Ok(trip);
        }
        [HttpPut("UpdateTrip/{tripId}")]
        public IActionResult UpdateTrip(int tripId, [FromBody]Trip trip)
        {
            _service.UpdateTrip(tripId, trip);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if(trip != null)
            {
                _service.AddTrip(trip);
            }
            return Ok();
        }

        [HttpDelete("DeleteTrip/{tripId}")]
        public IActionResult DeleteTrip(int tripId)
        {
            _service.DeleteTrip(tripId);
            return Ok();
        }
    }
}
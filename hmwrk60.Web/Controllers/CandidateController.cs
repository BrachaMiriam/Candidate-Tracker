using hmwrk60.Data;
using hmwrk59.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hmwrk60.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("getpendingcount")]
        public object GetPendingCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetPendingCount() };
        }

        [HttpGet]
        [Route("getconfirmedcount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetConfirmedCount() };
        }

        [HttpGet]
        [Route("getrefusedcount")]
        public object GetRefusedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetRefusedCount() };
        }

        [Route("getconfirmedcandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetConfirmedCandidates();
        }

        [Route("getrefusedcandidates")]
        [HttpGet]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetRefusedCandidates();
        }

        [Route("getpendingcandidates")]
        [HttpGet]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetPendingCandidates();
        }

        [Route("getcandidate")]
        [HttpGet]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateById(id);
        }

        [Route("confirmcandidate")]
        [HttpPost]
        public void ConfirmCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Confirmed;
            repo.UpdateCandidate(candidate);
        }

        [Route("refusecandidate")]
        [HttpPost]
        public void RefuseCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Refused;
            repo.UpdateCandidate(candidate);
        }

        

        
    }
}

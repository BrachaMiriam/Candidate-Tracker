using hmwrk59.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hmwrk60.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            ctx.Add(candidate);
            ctx.SaveChanges();
        }

        public int GetPendingCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count();
        }

        public int GetConfirmedCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();
        }

        public int GetRefusedCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count();
        }

        public List<Candidate> GetConfirmedCandidates()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }

        public List<Candidate> GetRefusedCandidates()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }

        public List<Candidate> GetPendingCandidates()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidate(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
    }
}

package com.js.budget.repository

import com.js.budget.model.AccountType
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountTypeRepository : JpaRepository<AccountType, Long>
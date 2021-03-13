package com.js.budget.controller

import com.js.budget.model.Account
import com.js.budget.repository.AccountRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/v1/accounts")
class AccountController(private val accountRepository: AccountRepository) {

    @GetMapping("")
    fun getAllAccounts(): List<Account> = 
        accountRepository.findAll()


    @PostMapping("")
    fun createNewAccount(@Valid @RequestBody account: Account): Account =
         accountRepository.save(account)


    @GetMapping("/{id}")
    fun getAccountById(@PathVariable(value = "id") accountId: Long): ResponseEntity<Account> {
        return accountRepository.findById(accountId).map { account -> 
            ResponseEntity.ok(account)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/{id}")
    fun updateAccountById(@PathVariable(value = "id") accountId: Long,
        @Valid @RequestBody updateAccount: Account): ResponseEntity<Account> {

        return accountRepository.findById(accountId).map { existingAccount ->
            val updatedAccount: Account = existingAccount
                    .copy(name = updateAccount.name)
            ResponseEntity.ok().body(accountRepository.save(updatedAccount))
        }.orElse(ResponseEntity.notFound().build())

    }

    @DeleteMapping("/{id}")
    fun deleteAccountById(@PathVariable(value = "id") AccountId: Long): ResponseEntity<Void> {

        return accountRepository.findById(AccountId).map { Account  ->
            accountRepository.delete(Account)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())

    }
}
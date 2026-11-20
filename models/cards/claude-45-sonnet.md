---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 56.5018062509639
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.5, z: 0.54, r: 58.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 60.5, z: 0.7, r: 60.5, estimated: false }  # 코딩
  agentic: { s: 59.6, z: 0.51, r: 57.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.3, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.83, r: 62.5, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.4, r: 56.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 56.5018062509639 t/s · TTFT 19.0278665827903s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 실측 | [[gpqa-diamond]] 83.4343434343434%×0.4, [[humanitys-last-exam]] 17.7942539388323%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 83.4343434343434%×1.0, [[humanitys-last-exam]] 17.7942539388323%×1.0 |
| 코딩 | 60.5 | +0.7 | 실측 | [[scicode]] 45.717592592592595%×1.0, [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 57.6 | +0.51 | 실측 | [[gdpval]] 914.97%×1.0, [[tau2-bench]] 78.07017543859651%×1.0, [[tau3-banking]] 24.5360824742268%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 68.728323699422%×1.0 |
| 긴문맥 | 62.5 | +0.83 | 실측 | [[aa-lcr]] 72.3333333333333%×1.0 |
| 지시 따르기 | 56.0 | +0.4 | 실측 | [[ifbench]] 57.2789115646258%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

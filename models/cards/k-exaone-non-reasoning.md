---
type: Model
title: K-EXAONE (Non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.9, z: -0.58, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.6, z: -0.48, r: 42.7, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.87, r: 37.0, estimated: false }  # 코딩
  agentic: { s: 35.1, z: -0.12, r: 48.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.25, r: 53.7, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.6, r: 41.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# K-EXAONE (Non-reasoning)

LG AI Research · Open · Large · 컨텍스트 256k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.58 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.7 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 37.0 | -0.87 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 48.1 | -0.12 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.7 | +0.25 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 41.0 | -0.6 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

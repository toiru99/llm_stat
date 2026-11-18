---
type: Model
title: GPT-5.6 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 32.3433563656461
price_blended_usd_1m: 1.74
output_speed_tps: 88.97286389799649
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.2, z: 1.54, r: 73.0, estimated: false }  # 전문 지식
  reasoning: { s: 78.9, z: 2.14, r: 82.1, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 83.7, z: 1.34, r: 70.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.3, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5.6 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.3433563656461** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 88.97286389799649 t/s · TTFT 64.08157902210556s · 1M ctx` · 가성비 18.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.54 | 실측 | [[gpqa-diamond]] 92.5252525252525%×0.4, [[humanitys-last-exam]] 42.9101019462465%×0.3 |
| 추론 | 82.1 | +2.14 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 92.5252525252525%×1.0, [[humanitys-last-exam]] 42.9101019462465%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 54.976851851851805%×1.0, [[terminal-bench]] 57.5757575757576%×0.5 |
| 에이전트 | 70.1 | +1.34 | 실측 | [[gdpval]] 1461.19%×1.0, [[tau2-bench]] 86.2573099415205%×1.0, [[tau3-banking]] 40.2061855670103%×1.0, [[terminal-bench]] 57.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 80.6936416184971%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 71.2244897959184%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

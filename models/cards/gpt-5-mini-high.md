---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.2, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 56.1, z: 0.64, r: 59.5, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 40.6, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.15, r: 52.2, estimated: false }  # 멀티모달
  long_context: { s: 81.5, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.56, r: 73.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[gpqa-diamond]] 82.8%×0.4, [[humanitys-last-exam]] 21.5%×0.3 |
| 추론 | 59.5 | +0.64 | 실측 | [[gpqa-diamond]] 82.8%×1.0, [[humanitys-last-exam]] 21.5%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.3%×0.5 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 773.0%×1.0, [[tau3-banking]] 15.5%×1.0, [[terminal-bench]] 33.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.2 | +0.15 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 72.3%×1.0 |
| 지시 따르기 | 73.3 | +1.56 | 실측 | [[ifbench]] 75.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

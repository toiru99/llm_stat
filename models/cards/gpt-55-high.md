---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.3, z: 1.63, r: 74.5, estimated: false }  # 전문 지식
  reasoning: { s: 84.6, z: 1.76, r: 76.4, estimated: false }  # 추론
  coding: { s: 84.9, z: 1.59, r: 73.8, estimated: false }  # 코딩
  agentic: { s: 77.9, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.2, z: 0.9, r: 63.5, estimated: false }  # 멀티모달
  long_context: { s: 95.0, z: 1.27, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 83.6, z: 1.3, r: 69.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.5 | +1.63 | 실측 | [[gpqa-diamond]] 93.2%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 76.4 | +1.76 | 실측 | [[gpqa-diamond]] 93.2%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 73.8 | +1.59 | 실측 | [[scicode]] 56.1%×1.0, [[terminal-bench]] 59.8%×0.5 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[gdpval]] 1336.0%×1.0, [[tau3-banking]] 36.7%×1.0, [[terminal-bench]] 59.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.5 | +0.9 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 69.1 | +1.27 | 실측 | [[aa-lcr]] 84.3%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 실측 | [[ifbench]] 71.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

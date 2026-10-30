---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 99.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.2, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 83.5, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 87.9, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.71, r: 60.6, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.45, r: 71.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 99.0 t/s · TTFT 157.47s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[apex-agents]] 33.0%×1.0, [[gdpval]] 1256.0%×1.0, [[tau3-banking]] 40.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.6 | +0.71 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 71.7 | +1.45 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

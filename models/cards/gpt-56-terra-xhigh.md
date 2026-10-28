---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 116.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.49, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 81.3, z: 1.6, r: 74.0, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.97, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 116.0 t/s · TTFT 9.98s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.49 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 74.0 | +1.6 | 실측 | [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 1456.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

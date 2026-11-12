---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.6, z: 1.34, r: 70.1, estimated: false }  # 전문 지식
  reasoning: { s: 71.5, z: 1.39, r: 70.9, estimated: false }  # 추론
  coding: { s: 71.3, z: 1.13, r: 66.9, estimated: false }  # 코딩
  agentic: { s: 71.3, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.56, r: 73.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.1 | +1.34 | 실측 | [[gpqa-diamond]] 90.3%×0.4, [[humanitys-last-exam]] 37.7%×0.3 |
| 추론 | 70.9 | +1.39 | 실측 | [[gpqa-diamond]] 90.3%×1.0, [[humanitys-last-exam]] 37.7%×1.0 |
| 코딩 | 66.9 | +1.13 | 실측 | [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 82.7%×1.0 |
| 지시 따르기 | 73.3 | +1.56 | 실측 | [[ifbench]] 75.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

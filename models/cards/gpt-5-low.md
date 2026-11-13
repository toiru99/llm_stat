---
type: Model
title: GPT-5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.7, z: 0.51, r: 57.6, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.08, r: 51.2, estimated: false }  # 코딩
  agentic: { s: 40.2, z: 0.18, r: 52.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 74.5, z: 0.64, r: 59.6, estimated: true }  # 긴문맥
  instruction: { s: 76.5, z: 1.01, r: 65.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[gpqa-diamond]] 80.8%×0.4, [[humanitys-last-exam]] 19.6%×0.3 |
| 추론 | 57.6 | +0.51 | 실측 | [[gpqa-diamond]] 80.8%×1.0, [[humanitys-last-exam]] 19.6%×1.0 |
| 코딩 | 51.2 | +0.08 | 실측 | [[terminal-bench]] 26.5%×0.5 |
| 에이전트 | 52.6 | +0.18 | 실측 | [[terminal-bench]] 26.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 59.6 | +0.64 | 추정 | (추정) |
| 지시 따르기 | 65.1 | +1.01 | 실측 | [[ifbench]] 66.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

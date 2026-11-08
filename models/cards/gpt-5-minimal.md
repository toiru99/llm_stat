---
type: Model
title: GPT-5 (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.5, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.3, z: -0.37, r: 44.5, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 27.6, z: -0.23, r: 46.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 52.9, z: 0.01, r: 50.1, estimated: true }  # 긴문맥
  instruction: { s: 47.1, z: -0.25, r: 46.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5 (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[gpqa-diamond]] 67.3%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 44.5 | -0.37 | 실측 | [[gpqa-diamond]] 67.3%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[terminal-bench]] 18.2%×0.5 |
| 에이전트 | 46.6 | -0.23 | 실측 | [[terminal-bench]] 18.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 50.1 | +0.01 | 추정 | (추정) |
| 지시 따르기 | 46.2 | -0.25 | 실측 | [[ifbench]] 45.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

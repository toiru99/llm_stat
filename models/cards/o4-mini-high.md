---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.1413
output_speed_tps: 150.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.6, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.9, z: 0.32, r: 54.9, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.48, r: 42.8, estimated: false }  # 코딩
  agentic: { s: 22.7, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.1413/1M · 150.0 t/s · TTFT 22.77s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 54.9 | +0.32 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 42.8 | -0.48 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

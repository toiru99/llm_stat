---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 80.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.05, r: 65.7, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.1, r: 66.5, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.39, r: 55.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.98, r: 79.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 80.0 t/s · TTFT 13.33s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.7 | +1.05 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 66.5 | +1.1 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 55.8 | +0.39 | 실측 | [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 79.7 | +1.98 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

---
type: Model
title: Grok 4 Fast (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.23
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.5, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.65, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.56, r: 41.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.6, z: -1.36, r: 29.7, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.78, r: 38.3, estimated: false }  # 긴문맥
  instruction: { s: 36.0, z: -0.73, r: 39.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Grok 4 Fast (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[gpqa-diamond]] 60.6%×0.4, [[humanitys-last-exam]] 4.5%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[gpqa-diamond]] 60.6%×1.0, [[humanitys-last-exam]] 4.5%×1.0 |
| 코딩 | 40.2 | -0.65 | 실측 | [[terminal-bench]] 12.1%×0.5 |
| 에이전트 | 41.6 | -0.56 | 실측 | [[terminal-bench]] 12.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.7 | -1.36 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 38.3 | -0.78 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 39.0 | -0.73 | 실측 | [[ifbench]] 37.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

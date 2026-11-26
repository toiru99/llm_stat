---
type: Model
title: Grok 4.1 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.6, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.24, r: 53.7, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.14, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.1, z: -0.32, r: 45.2, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 57.0, z: 0.27, r: 54.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Grok 4.1 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[gpqa-diamond]] 85.2525%×0.4, [[humanitys-last-exam]] 19.3234%×0.3 |
| 추론 | 53.7 | +0.24 | 실측 | [[critpt]] 2.85714%×1.0, [[gpqa-diamond]] 85.2525%×1.0, [[humanitys-last-exam]] 19.3234%×1.0 |
| 코딩 | 47.8 | -0.14 | 실측 | [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[tau2-bench]] 93.2749%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.2 | -0.32 | 실측 | [[mmmu-pro]] 63.2948%×1.0 |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 74%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 실측 | [[ifbench]] 52.7211%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

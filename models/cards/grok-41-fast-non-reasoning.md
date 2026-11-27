---
type: Model
title: Grok 4.1 Fast (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.0, z: -0.43, r: 43.6, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.62, r: 40.7, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 43.1, z: -0.14, r: 47.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 45.3, z: -1.34, r: 30.0, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.68, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 34.2, z: -0.68, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok 4.1 Fast (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 63.7374%×0.4, [[humanitys-last-exam]] 5.09731%×0.3 |
| 추론 | 40.7 | -0.62 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 63.7374%×1.0, [[humanitys-last-exam]] 5.09731%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 14.3939%×0.5 |
| 에이전트 | 47.8 | -0.14 | 실측 | [[tau2-bench]] 63.7427%×1.0, [[terminal-bench]] 14.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.0 | -1.34 | 실측 | [[mmmu-pro]] 48.4393%×1.0 |
| 긴문맥 | 39.7 | -0.68 | 실측 | [[aa-lcr]] 31.3333%×1.0 |
| 지시 따르기 | 39.9 | -0.68 | 실측 | [[ifbench]] 36.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

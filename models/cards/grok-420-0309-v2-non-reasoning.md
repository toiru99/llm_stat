---
type: Model
title: Grok 4.20 0309 v2 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 124.70856902593
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 60.5, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.17, r: 52.6, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.21, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: 0.07, r: 51.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 v2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Grok 4.20 0309 v2 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 124.70856902593 t/s · TTFT 1.29538013764586s · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[gpqa-diamond]] 77.5758%×0.4, [[humanitys-last-exam]] 27.9425%×0.3 |
| 추론 | 52.6 | +0.17 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 77.5758%×1.0, [[humanitys-last-exam]] 27.9425%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[tau2-bench]] 59.9415%×1.0, [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.8 | -0.21 | 실측 | [[mmmu-pro]] 64.9133%×1.0 |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 23.3333%×1.0 |
| 지시 따르기 | 51.1 | +0.07 | 실측 | [[ifbench]] 49.3197%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

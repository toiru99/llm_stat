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
  knowledge: { s: 35.6, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -0.7, r: 39.6, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 41.3, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.8, z: -1.36, r: 29.6, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.94, r: 35.9, estimated: false }  # 긴문맥
  instruction: { s: 35.9, z: -0.6, r: 40.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Grok 4 Fast (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 60.6061%×0.4, [[humanitys-last-exam]] 4.54124%×0.3 |
| 추론 | 39.6 | -0.7 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 60.6061%×1.0, [[humanitys-last-exam]] 4.54124%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 12.1212%×0.5 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[tau2-bench]] 63.7427%×1.0, [[terminal-bench]] 12.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.6 | -1.36 | 실측 | [[mmmu-pro]] 48.0925%×1.0 |
| 긴문맥 | 35.9 | -0.94 | 실측 | [[aa-lcr]] 24%×1.0 |
| 지시 따르기 | 40.9 | -0.6 | 실측 | [[ifbench]] 37.6871%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

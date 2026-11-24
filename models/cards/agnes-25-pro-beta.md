---
type: Model
title: Agnes 2.5 Pro Beta
creator: Sapiens AI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.35, r: 70.3, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 0.91, r: 63.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Agnes 2.5 Pro Beta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[gpqa-diamond]] 90.5051%×0.4, [[humanitys-last-exam]] 37.5348%×0.3 |
| 추론 | 70.3 | +1.35 | 실측 | [[critpt]] 15.7143%×1.0, [[gpqa-diamond]] 90.5051%×1.0, [[humanitys-last-exam]] 37.5348%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 48.8426%×1.0 |
| 에이전트 | 63.7 | +0.91 | 실측 | [[gdpval]] 1334.43 Elo×1.0, [[tau3-banking]] 35.6701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 6.31022664307401
price_blended_usd_1m: 0.208
output_speed_tps: 90.0265595772452
context_window: 131072
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.69, r: 60.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 62.5, z: 0.72, r: 60.8, estimated: false }  # 코딩
  agentic: { s: 49.1, z: 0.07, r: 51.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.8, z: 0.43, r: 56.4, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small(30B) · 컨텍스트 131k · 종합지능 **6.31022664307401**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.208/1M · 90.0265595772452 t/s · TTFT 1.17822834099744s · 131k ctx` · 가성비 30.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.3 | +0.69 | 실측 | [[gpqa-diamond]] 83.5354%×0.4, [[humanitys-last-exam]] 21.9648%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 83.5354%×1.0, [[humanitys-last-exam]] 21.9648%×1.0 |
| 코딩 | 60.8 | +0.72 | 실측 | [[scicode]] 44.9074%×1.0 |
| 에이전트 | 51.1 | +0.07 | 실측 | [[gdpval]] 791.69 Elo×1.0, [[tau3-banking]] 23.5052%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.4 | +0.43 | 실측 | [[mmmu-pro]] 74.3353%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

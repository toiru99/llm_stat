---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 15.6850612405479
price_blended_usd_1m: 0.47
output_speed_tps: 61.0881360269043
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 57.0, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.45, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 0.82, r: 62.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.0, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **15.6850612405479**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 61.0881360269043 t/s · TTFT 9.34782150259312s · 256k ctx` · 가성비 33.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 84.5455%×0.4, [[humanitys-last-exam]] 14.0408%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 84.5455%×1.0, [[humanitys-last-exam]] 14.0408%×1.0 |
| 코딩 | 56.8 | +0.45 | 실측 | [[scicode]] 40.0463%×1.0 |
| 에이전트 | 62.2 | +0.82 | 실측 | [[gdpval]] 1366.08 Elo×1.0, [[tau3-banking]] 32.1649%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 73.7572%×1.0 |
| 긴문맥 | 63.6 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

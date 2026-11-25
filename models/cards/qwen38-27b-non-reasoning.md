---
type: Model
title: Qwen3.8 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 10.0316676028892
price_blended_usd_1m: 0.47
output_speed_tps: 54.4550012050438
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.1, r: 48.4, estimated: false }  # 추론
  coding: { s: 48.2, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.18, r: 52.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.9, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.8 27B (non-reasoning)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **10.0316676028892**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 54.4550012050438 t/s · TTFT 4.81776911938883s · 256k ctx` · 가성비 21.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[gpqa-diamond]] 81.8182%×0.4, [[humanitys-last-exam]] 12.1409%×0.3 |
| 추론 | 48.4 | -0.1 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 81.8182%×1.0, [[humanitys-last-exam]] 12.1409%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[scicode]] 36.2269%×1.0 |
| 에이전트 | 52.6 | +0.18 | 실측 | [[gdpval]] 1081.94 Elo×1.0, [[tau3-banking]] 20%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.9422%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

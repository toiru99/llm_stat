---
type: Model
title: Qwen3.8 27B (xhigh)
creator: Alibaba
license: Open
intelligence_index: 20.1068756031705
price_blended_usd_1m: 0.47
output_speed_tps: 58.6485134939049
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 72.6, z: 1.25, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 51.1, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 65.3, z: 0.82, r: 62.3, estimated: false }  # 코딩
  agentic: { s: 87.1, z: 1.41, r: 71.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3.8 27B (xhigh)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **20.1068756031705**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 58.6485134939049 t/s · TTFT 5.37150205046044s · 256k ctx` · 가성비 42.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.25 | 실측 | [[gpqa-diamond]] 90.5051%×0.4, [[humanitys-last-exam]] 33.9203%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 5.42857%×1.0, [[gpqa-diamond]] 90.5051%×1.0, [[humanitys-last-exam]] 33.9203%×1.0 |
| 코딩 | 62.3 | +0.82 | 실측 | [[scicode]] 46.6435%×1.0 |
| 에이전트 | 71.1 | +1.41 | 실측 | [[gdpval]] 1426.53 Elo×1.0, [[tau3-banking]] 48.0412%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 76.3006%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 82%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

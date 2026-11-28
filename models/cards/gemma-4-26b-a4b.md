---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: 3.97138310569178
price_blended_usd_1m: 0.086
output_speed_tps: 87.64224125936616
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: true
radar:
  knowledge: { s: 56.5, z: 0.47, r: 57.1, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 43.2, z: 0.07, r: 51.1, estimated: false }  # 코딩
  agentic: { s: 32.7, z: -0.51, r: 42.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.5, r: 57.5, estimated: false }  # 긴문맥
  instruction: { s: 84.7, z: 1.43, r: 71.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **3.97138310569178**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.095 · 출력 $0.32 · 혼합 $0.086/1M · 87.64224125936616 t/s · TTFT 1.40380117414399s · 256k ctx` · 가성비 46.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.1 | +0.47 | 실측 | [[gpqa-diamond]] 79.1919%×0.4, [[humanitys-last-exam]] 19.3234%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 79.1919%×1.0, [[humanitys-last-exam]] 19.3234%×1.0 |
| 코딩 | 51.1 | +0.07 | 실측 | [[scicode]] 40.0463%×1.0, [[terminal-bench]] 13.64%×0.5 |
| 에이전트 | 42.3 | -0.51 | 실측 | [[gdpval]] 572.81 Elo×1.0, [[tau2-bench]] 43.5673%×1.0, [[tau3-banking]] 11.9588%×1.0, [[terminal-bench]] 13.64%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.2486%×1.0 |
| 긴문맥 | 57.5 | +0.5 | 실측 | [[aa-lcr]] 65.6667%×1.0 |
| 지시 따르기 | 71.4 | +1.43 | 실측 | [[ifbench]] 72.449%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

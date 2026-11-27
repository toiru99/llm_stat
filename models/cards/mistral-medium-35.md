---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 4.64508756526957
price_blended_usd_1m: 1.155
output_speed_tps: 138.480608223838
context_window: 256000
status: current
size_class: Medium
params_b: 128
is_reasoning: true
radar:
  knowledge: { s: 50.4, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.41, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.33, r: 55.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.22, r: 46.7, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 79.6, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Medium(128B) · 컨텍스트 256k · 종합지능 **4.64508756526957**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.155/1M · 138.480608223838 t/s · TTFT 8.49832716162351s · 256k ctx` · 가성비 4.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 74.8485%×0.4, [[humanitys-last-exam]] 13.7627%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 74.8485%×1.0, [[humanitys-last-exam]] 13.7627%×1.0 |
| 코딩 | 56.2 | +0.41 | 실측 | [[scicode]] 40.162%×1.0, [[terminal-bench]] 33.3333%×0.5 |
| 에이전트 | 55.0 | +0.33 | 실측 | [[gdpval]] 768.55 Elo×1.0, [[tau2-bench]] 94.152%×1.0, [[tau3-banking]] 15.0515%×1.0, [[terminal-bench]] 33.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.7 | -0.22 | 실측 | [[mmmu-pro]] 64.8555%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 68.7755%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

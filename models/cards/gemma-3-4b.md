---
type: Model
title: Gemma 3 4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 68.5382035543233
context_window: 128000
status: past
size_class: Tiny
params_b: 4.3
is_reasoning: false
radar:
  knowledge: { s: 15.2, z: -1.53, r: 27.0, estimated: false }  # 전문 지식
  reasoning: { s: 9.4, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 2.2, z: -1.58, r: 26.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 20.6, z: -2.6, r: 11.1, estimated: false }  # 멀티모달
  long_context: { s: 7.5, z: -1.54, r: 26.9, estimated: false }  # 긴문맥
  instruction: { s: 22.7, z: -1.15, r: 32.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemma 3 4B

Google · Open · Tiny(4.3B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 68.5382035543233 t/s · TTFT 1.78635676647234s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 27.0 | -1.53 | 실측 | [[gpqa-diamond]] 29.0909%×0.4, [[humanitys-last-exam]] 5.29%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 29.0909%×1.0, [[humanitys-last-exam]] 5.29%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 26.2 | -1.58 | 실측 | [[tau2-bench]] 4.97076%×1.0, [[tau3-banking]] 0.412371%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 11.1 | -2.6 | 실측 | [[mmmu-pro]] 29.9422%×1.0 |
| 긴문맥 | 26.9 | -1.54 | 실측 | [[aa-lcr]] 6.66667%×1.0 |
| 지시 따르기 | 32.7 | -1.15 | 실측 | [[ifbench]] 28.2993%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

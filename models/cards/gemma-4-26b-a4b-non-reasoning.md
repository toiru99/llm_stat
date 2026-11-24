---
type: Model
title: Gemma 4 26B A4B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.115
output_speed_tps: 87.5045762559648
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: false
radar:
  knowledge: { s: 46.8, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.33, r: 45.0, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 39.3, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 47.7, z: -0.31, r: 45.4, estimated: false }  # 긴문맥
  instruction: { s: 46.8, z: -0.15, r: 47.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemma 4 26B A4B (non-reasoning)

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.115/1M · 87.5045762559648 t/s · TTFT 1.65339915881353s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[gpqa-diamond]] 71.4141%×0.4, [[humanitys-last-exam]] 11.4921%×0.3 |
| 추론 | 45.0 | -0.33 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 71.4141%×1.0, [[humanitys-last-exam]] 11.4921%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 25%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[tau2-bench]] 40.3509%×1.0, [[terminal-bench]] 25%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.6 | -0.09 | 실측 | [[mmmu-pro]] 66.7052%×1.0 |
| 긴문맥 | 45.4 | -0.31 | 실측 | [[aa-lcr]] 42.3333%×1.0 |
| 지시 따르기 | 47.7 | -0.15 | 실측 | [[ifbench]] 45.4422%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

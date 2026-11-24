---
type: Model
title: Jamba 1.7 Large
creator: AI21 Labs
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 398
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -1.26, r: 31.1, estimated: false }  # 전문 지식
  reasoning: { s: 12.4, z: -1.13, r: 33.1, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 8.5, z: -1.36, r: 29.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.8, z: -1.1, r: 33.5, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.75, r: 38.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.7 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Jamba 1.7 Large

AI21 Labs · Open · Large(398B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 31.1 | -1.26 | 실측 | [[gpqa-diamond]] 38.9899%×0.4, [[humanitys-last-exam]] 3.6608%×0.3 |
| 추론 | 33.1 | -1.13 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 38.9899%×1.0, [[humanitys-last-exam]] 3.6608%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 29.6 | -1.36 | 실측 | [[tau2-bench]] 13.4503%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.5 | -1.1 | 실측 | [[aa-lcr]] 19.3333%×1.0 |
| 지시 따르기 | 38.7 | -0.75 | 실측 | [[ifbench]] 35.1701%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

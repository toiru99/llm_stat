---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 11
is_reasoning: false
radar:
  knowledge: { s: 10.8, z: -1.75, r: 23.7, estimated: false }  # 전문 지식
  reasoning: { s: 6.8, z: -1.41, r: 28.9, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 7.9, z: -1.38, r: 29.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 19.7, z: -2.64, r: 10.4, estimated: false }  # 멀티모달
  long_context: { s: 14.3, z: -1.33, r: 30.1, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small(11B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 23.7 | -1.75 | 실측 | [[gpqa-diamond]] 22.1212%×0.4, [[humanitys-last-exam]] 5.53%×0.3 |
| 추론 | 28.9 | -1.41 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 22.1212%×1.0, [[humanitys-last-exam]] 5.53%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 29.3 | -1.38 | 실측 | [[tau2-bench]] 14.6199%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 10.4 | -2.64 | 실측 | [[mmmu-pro]] 29.3064%×1.0 |
| 긴문맥 | 30.1 | -1.33 | 실측 | [[aa-lcr]] 12.6667%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 30.4082%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

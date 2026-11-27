---
type: Model
title: Apertus 8B Instruct
creator: Swiss AI Initiative
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 12.7, z: -1.66, r: 25.1, estimated: false }  # 전문 지식
  reasoning: { s: 7.8, z: -1.36, r: 29.6, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -1.46, r: 28.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 14.4, z: -1.5, r: 27.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apertus 8B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Apertus 8B Instruct

Swiss AI Initiative · Open · Small(8B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.1 | -1.66 | 실측 | [[gpqa-diamond]] 25.5556%×0.4, [[humanitys-last-exam]] 4.95829%×0.3 |
| 추론 | 29.6 | -1.36 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 25.5556%×1.0, [[humanitys-last-exam]] 4.95829%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 28.1 | -1.46 | 실측 | [[tau2-bench]] 11.4035%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 27.5 | -1.5 | 실측 | [[ifbench]] 22.381%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

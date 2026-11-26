---
type: Model
title: Exaone 4.0 1.2B
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: current
size_class: Tiny
params_b: 1.3
is_reasoning: true
radar:
  knowledge: { s: 30.4, z: -0.79, r: 38.1, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.37, r: 29.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 15.3, z: -1.46, r: 28.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Exaone 4.0 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Exaone 4.0 1.2B

LG AI Research · Open · Tiny(1.3B) · 컨텍스트 64k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.1 | -0.79 | 실측 | [[gpqa-diamond]] 51.5152%×0.4, [[humanitys-last-exam]] 5.97776%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.5152%×1.0, [[humanitys-last-exam]] 5.97776%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 29.5 | -1.37 | 실측 | [[tau2-bench]] 16.3743%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 28.1 | -1.46 | 실측 | [[ifbench]] 22.9932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

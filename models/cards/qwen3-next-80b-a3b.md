---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.193
output_speed_tps: 116.818035567998
context_window: 262144
status: current
size_class: Medium
params_b: 80
is_reasoning: false
radar:
  knowledge: { s: 46.2, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.4, z: 0.05, r: 50.8, estimated: false }  # 긴문맥
  instruction: { s: 38.7, z: -0.49, r: 42.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $1.1 · 혼합 $0.193/1M · 116.818035567998 t/s · TTFT 1.70192150598907s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[gpqa-diamond]] 73.8384%×0.4, [[humanitys-last-exam]] 7.64597%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.8384%×1.0, [[humanitys-last-exam]] 7.64597%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[tau2-bench]] 21.6374%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.8 | +0.05 | 실측 | [[aa-lcr]] 52.6667%×1.0 |
| 지시 따르기 | 42.7 | -0.49 | 실측 | [[ifbench]] 39.6599%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

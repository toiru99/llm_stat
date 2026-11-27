---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: true
radar:
  knowledge: { s: 47.3, z: 0.03, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.32, r: 45.1, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.65, r: 40.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.2, z: -0.32, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.14, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: 66.4, z: 0.66, r: 59.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 실측 | [[gpqa-diamond]] 73.3333%×0.4, [[humanitys-last-exam]] 10.1483%×0.3 |
| 추론 | 45.1 | -0.32 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.3333%×1.0, [[humanitys-last-exam]] 10.1483%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 40.3 | -0.65 | 실측 | [[tau2-bench]] 45.614%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.3 | -0.32 | 실측 | [[mmmu-pro]] 63.4104%×1.0 |
| 긴문맥 | 52.2 | +0.14 | 실측 | [[aa-lcr]] 55.3333%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 실측 | [[ifbench]] 59.3878%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

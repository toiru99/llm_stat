---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 8.8
is_reasoning: true
radar:
  knowledge: { s: 33.4, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 20.1, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 56.2, z: -0.78, r: 38.4, estimated: false }  # 멀티모달
  long_context: { s: 37.6, z: -0.62, r: 40.8, estimated: false }  # 긴문맥
  instruction: { s: 39.0, z: -0.48, r: 42.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Small(8.8B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 57.8788%×0.4, [[humanitys-last-exam]] 3.84615%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 57.8788%×1.0, [[humanitys-last-exam]] 3.84615%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 22.5146%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.4 | -0.78 | 실측 | [[mmmu-pro]] 56.6474%×1.0 |
| 긴문맥 | 40.8 | -0.62 | 실측 | [[aa-lcr]] 33.3333%×1.0 |
| 지시 따르기 | 42.8 | -0.48 | 실측 | [[ifbench]] 39.8639%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

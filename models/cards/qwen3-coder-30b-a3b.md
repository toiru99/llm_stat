---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2475
output_speed_tps: 171.4459083250395
context_window: 262144
status: past
size_class: Small
params_b: 30.5
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 23.0, z: -0.61, r: 40.9, estimated: false }  # 코딩
  agentic: { s: 28.9, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.64, r: 40.4, estimated: false }  # 긴문맥
  instruction: { s: 28.8, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small(30.5B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.19 · 출력 $0.765 · 혼합 $0.2475/1M · 171.4459083250395 t/s · TTFT 1.859770222802755s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 51.6162%×0.4, [[humanitys-last-exam]] 3.84615%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.6162%×1.0, [[humanitys-last-exam]] 3.84615%×1.0 |
| 코딩 | 40.9 | -0.61 | 실측 | [[terminal-bench]] 15.1515%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[tau2-bench]] 34.5029%×1.0, [[terminal-bench]] 15.1515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.4 | -0.64 | 실측 | [[aa-lcr]] 32.6667%×1.0 |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 32.6531%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

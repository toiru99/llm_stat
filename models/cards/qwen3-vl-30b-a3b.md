---
type: Model
title: Qwen3 VL 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.375
output_speed_tps: 29.573400932155
context_window: 256000
status: past
size_class: Small
params_b: 30
is_reasoning: false
radar:
  knowledge: { s: 42.5, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.48, r: 42.7, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 29.5, z: -0.87, r: 36.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 VL 30B A3B

Alibaba · Open · Small(30B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.35 · 출력 $0.6 · 혼합 $0.375/1M · 29.573400932155 t/s · TTFT 1.30398023349667s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[gpqa-diamond]] 69.4949%×0.4, [[humanitys-last-exam]] 6.30213%×0.3 |
| 추론 | 42.7 | -0.48 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.4949%×1.0, [[humanitys-last-exam]] 6.30213%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 19.0058%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.1387%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 36.9 | -0.87 | 실측 | [[ifbench]] 33.1293%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

---
type: Model
title: Apriel-v1.5-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 15
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.8, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 42.6, z: -0.16, r: 47.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 56.7, z: -0.75, r: 38.8, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -1.03, r: 34.5, estimated: false }  # 긴문맥
  instruction: { s: 69.6, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.5-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Apriel-v1.5-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 71.3131%×0.4, [[humanitys-last-exam]] 12.1409%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 71.3131%×1.0, [[humanitys-last-exam]] 12.1409%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 47.6 | -0.16 | 실측 | [[tau2-bench]] 68.4211%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.8 | -0.75 | 실측 | [[mmmu-pro]] 57.052%×1.0 |
| 긴문맥 | 34.5 | -1.03 | 실측 | [[aa-lcr]] 21.3333%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 61.7007%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

---
type: Model
title: GPT-4o (Aug)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.375
output_speed_tps: 95.720479900261
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.9, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 20.9, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 55.7, z: -0.8, r: 38.0, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.35, r: 44.7, estimated: false }  # 긴문맥
  instruction: { s: 33.5, z: -0.7, r: 39.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Aug)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-4o (Aug)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.375/1M · 95.720479900261 t/s · TTFT 1.8548354397258s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 52.1212%×0.4, [[humanitys-last-exam]] 2.33%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 52.1212%×1.0, [[humanitys-last-exam]] 2.33%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[tau2-bench]] 28.9474%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.0 | -0.8 | 실측 | [[mmmu-pro]] 56.3006%×1.0 |
| 긴문맥 | 44.7 | -0.35 | 실측 | [[aa-lcr]] 41%×1.0 |
| 지시 따르기 | 39.5 | -0.7 | 실측 | [[ifbench]] 35.9864%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)

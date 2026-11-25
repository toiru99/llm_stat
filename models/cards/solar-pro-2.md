---
type: Model
title: Solar Pro 2
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.6, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.6, z: -0.48, r: 42.9, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 16.5, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 35.1, z: -0.64, r: 40.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Solar Pro 2

Upstage · Proprietary · Unknown · 컨텍스트 65k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[gpqa-diamond]] 68.6869%×0.4, [[humanitys-last-exam]] 7.36793%×0.3 |
| 추론 | 42.9 | -0.48 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 68.6869%×1.0, [[humanitys-last-exam]] 7.36793%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[tau2-bench]] 28.0702%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 40.4 | -0.64 | 실측 | [[ifbench]] 37.0748%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
